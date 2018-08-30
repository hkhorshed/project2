#makes user table
sequelize model:generate --name user --attributes name:string,userName:string,email:string,password:string,phoneNum:string,project_id:integer

#makes project table
sequelize model:generate --name project --attributes projectName:string,teamLead:string,startDate:date,endDate:date,user_id:integer

#makes budget table
# sequelize model:generate --name budget --attributes projectName:string,startDate:date,endDate:date,budget:integer,expenseLog:string

#makes message table
# sequelize model:generate --name message --attributes text:text

#personal log table
# sequelize model:generate --name personalLog --attributes user_id:integer,task:string,startDate:date,endDate:date

# sequelize model:generate --name task --attributes 