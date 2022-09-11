import user from "./seeders/user.seed";
import movie from "./seeders/movie.seed";

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const seedData = [movie, user]

async function main() {
    for (let i = 0; i < seedData.length; i++) {
        await prisma[seedData[i]['tag']].createMany({
            data: seedData[i]['data']
        })
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    console.log("\ndone")
    prisma.$disconnect()
})