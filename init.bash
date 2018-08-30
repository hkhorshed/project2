#makes user table
# sequelize model:generate --name user --attributes userName:string,email:string,phoneNum:integer,password:string

#makes project table
# sequelize model:generate --name project --attributes projectName:string,team:string,teamLead:string,task:string,deadLine:date,endDate:date

#makes budget table
# sequelize model:generate --name budget --attributes projectName:string,startDate:date,endDate:date,budget:integer,expenseLog:string

#makes message table
# sequelize model:generate --name message --attributes text:text