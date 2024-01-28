-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_initiatorId_fkey";

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_initiatorId_fkey" FOREIGN KEY ("initiatorId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
