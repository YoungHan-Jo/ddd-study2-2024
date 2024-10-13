/*
  Warnings:

  - You are about to drop the column `address1` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `address2` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `receiverName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `receiverPhoneNumber` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderer_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderer_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_phone_number` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_address1` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_address2` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_message` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_zip_code` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address1",
DROP COLUMN "address2",
DROP COLUMN "receiverName",
DROP COLUMN "receiverPhoneNumber",
DROP COLUMN "zipCode",
ADD COLUMN     "orderer_id" TEXT NOT NULL,
ADD COLUMN     "orderer_name" TEXT NOT NULL,
ADD COLUMN     "receiver_name" TEXT NOT NULL,
ADD COLUMN     "receiver_phone_number" TEXT NOT NULL,
ADD COLUMN     "shipping_address1" TEXT NOT NULL,
ADD COLUMN     "shipping_address2" TEXT NOT NULL,
ADD COLUMN     "shipping_message" TEXT NOT NULL,
ADD COLUMN     "shipping_zip_code" TEXT NOT NULL;
