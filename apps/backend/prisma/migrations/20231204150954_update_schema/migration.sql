-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('URGENT', 'CAN_WAIT', 'OPTIONAL');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'CAN_WAIT',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'NOT_STARTED',
ADD COLUMN     "tags" TEXT[];
