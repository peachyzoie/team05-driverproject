-- CreateTable
CREATE TABLE `ProgramUser` (
    `userId` INTEGER NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `userType` ENUM('driver', 'sponsor', 'administrator') NOT NULL,

    UNIQUE INDEX `ProgramUser_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `USER_ID` INTEGER NOT NULL,
    `points` INTEGER NOT NULL,
    `numOrders` INTEGER NOT NULL,

    PRIMARY KEY (`USER_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sponsor` (
    `USER_ID` INTEGER NOT NULL,

    PRIMARY KEY (`USER_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrator` (
    `USER_ID` INTEGER NOT NULL,

    PRIMARY KEY (`USER_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PointTable` (
    `userId` INTEGER NOT NULL,
    `dateTimeStamp` DATETIME(3) NOT NULL,
    `pointNum` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `dateTimeStamp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DriverOrder` (
    `ORDER_ID` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `itemNum` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `inProcess` BOOLEAN NOT NULL,
    `isDelivered` BOOLEAN NOT NULL,
    `dateTimePlaced` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ORDER_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Catalog` (
    `CATALOG_ID` INTEGER NOT NULL,
    `sponsorId` INTEGER NOT NULL,

    PRIMARY KEY (`CATALOG_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `catalogId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`catalogId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `ProgramUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sponsor` ADD CONSTRAINT `Sponsor_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `ProgramUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Administrator` ADD CONSTRAINT `Administrator_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `ProgramUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PointTable` ADD CONSTRAINT `PointTable_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `ProgramUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DriverOrder` ADD CONSTRAINT `DriverOrder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `ProgramUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Catalog` ADD CONSTRAINT `Catalog_sponsorId_fkey` FOREIGN KEY (`sponsorId`) REFERENCES `Sponsor`(`USER_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `Catalog`(`CATALOG_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
