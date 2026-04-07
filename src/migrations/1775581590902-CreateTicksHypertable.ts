import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTicksHypertable1775581590902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 1. Ensure TimescaleDB extension exists
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS timescaledb;`);

        // 2. Create the standard PostgreSQL table
        await queryRunner.query(`
            CREATE TABLE "ticks" (
                "instrument_token" INT NOT NULL,
                "last_traded_price" INT NOT NULL,
                "last_traded_quantity" INT NOT NULL,
                "average_traded_price" INT NOT NULL,
                "volume_traded" INT NOT NULL,
                "buy_quantity" INT NOT NULL,
                "sell_quantity" INT NOT NULL,
                "open_price" INT NOT NULL,
                "high_price" INT NOT NULL,
                "low_price" INT NOT NULL,
                "close_price" INT NOT NULL,
                "last_traded_timestamp" TIMESTAMPTZ NOT NULL,
                "open_interest" INT NOT NULL,
                "oi_day_high" INT NOT NULL,
                "oi_day_low" INT NOT NULL,
                "exchange_timestamp" TIMESTAMPTZ NOT NULL,
                "received_at" TIMESTAMPTZ NOT NULL
            );
        `);

        // 3. Convert the table into a hypertable
        // Note: Using single quotes for the table and column names
        await queryRunner.query(`SELECT create_hypertable('ticks', 'exchange_timestamp');`);

        // 4. Create a hyper-optimized index for time-series lookups
        await queryRunner.query(`
            CREATE INDEX "idx_ticks_instrument_time" ON "ticks" ("instrument_token", "exchange_timestamp" DESC);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the table (this automatically removes the hypertable and indexes)
        await queryRunner.query(`DROP TABLE "ticks";`);
        // We generally do not drop the extension in down migrations 
        // as other tables might depend on it.
    }

}