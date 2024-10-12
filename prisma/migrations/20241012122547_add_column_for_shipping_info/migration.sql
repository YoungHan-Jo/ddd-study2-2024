/*
  Warnings:

  - Added the required column `address1` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address2` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverPhoneNumber` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "address1" TEXT NOT NULL,
ADD COLUMN     "address2" TEXT NOT NULL,
ADD COLUMN     "receiverName" TEXT NOT NULL,
ADD COLUMN     "receiverPhoneNumber" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
