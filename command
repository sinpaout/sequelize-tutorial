# generate migration
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

# migrate db
sequelize db:migrate

# undo migration
sequelize db:migrate:undo

# create seeds
sequelize db:seed:all
