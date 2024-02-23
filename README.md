## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
1) First install mongodb in your computer.
2) Create  database in mongodb with suitable name, in our case vehicle_management or any suitable name.
3) Now copy/rename .env.example file present in root directory of application and change your database url and port for serving application.
4) Now install nodejs v18.17.1 and npm version 9.6.7 in computer.
5) Now go to application directory and run following command
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

6) By running above command, application will be hosted in specified port in .env file.


## Api 
## Note replace 3000 port with your .env file port number

I) Authentication

a) Signup POST Api Sample-  http://localhost:3000/user/signup

    HTTP REQUEST TYPE: POST

    Testing Methodology:  In body of postman in raw section put following json body by selecting JSON in select input present in last
                        {
                            
                            "password":"nirajank",
                            "username":"nirajan",
                            "email":"nirajankay@gmail.com",
                            "fullName":"nirajan Kayastha"
                        }
    Response: User created successfully message will come if username and email not already made.

b)  Login POST Api Sample-  http://localhost:3000/user/login

    HTTP REQUEST TYPE: POST

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last
                       {
                            "password":"nirajank",
                            "email":"nirajankay@gmail.com"
                        
                        }
    Response: access_token response will get if password and email is correct.

II) Vehicle Api
## Note to access below api from "a" to "h" you need to set "Authorization" key in Header to "Bearer {access_token}" . {access_token} will be get through login api.

a)  Vechicle create POST Api Sample-  http://localhost:3000/vehicle

    HTTP REQUEST TYPE: POST

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last
                        {
                            "make": "make",
                            "model":"model",
                            "year":2010,
                            "registrationNumber":"registrationNumber",
                            "status":"active",
                            "location":"location"
                        }
    Response: vehicle object response will get if all validation passes.

b)  Vechicle all records GET Api Sample-  http://localhost:3000/vehicle
    HTTP REQUEST TYPE: GET

    Testing Methodology: Just hit the url.
    Response: vehicle list response.


c)  To update single vechicle by _id PUT Api Sample-  http://localhost:3000/vehicle/{_id}
    HTTP REQUEST TYPE: PUT

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last and replace {_id} with original identifier of vehicle
                        {
                            "make": "make",
                            "model":"model",
                            "year":2010,
                            "registrationNumber":"registrationNumber",
                            "status":"active",
                            "location":"location"
                        }
    Response: vehicle object response will get if all validation passes.

d)  To delete single vechicle by _id DELETE Api Sample-  http://localhost:3000/vehicle/{_id}

    HTTP REQUEST TYPE: DELETE

    Testing Methodology: Just Hit the URL.

    Response: vehicle object response will get which was deleted.

e)  To update status vechicle by _id PUT Api Sample-  http://localhost:3000/vehicle/{_id}/status

    HTTP REQUEST TYPE: PUT

    Status Body supported: ['active', 'maintenance', 'retired']

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last and replace {_id} with original identifier of vehicle
                        {
                            "status":"active",
                        }
    Response: vehicle object response will get if all validation passes.

f)  To assign driver to vechicle by _id PUT Api Sample -  http://localhost:3000/vehicle/{_id}/assign-driver

    HTTP REQUEST TYPE: PUT
    
## NOTE:: Since, it is only for demo purpose, I have not made driver crud so driverID can be any string for now. So relationship can be also maintained if required

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last and replace {_id} with original identifier of vehicle
                        {
                            "driverID":"65d840d044f0f6ab42b71118"
                        }

    Response: vehicle object response will get if all validation passes.


g)  To add maintenance task to vechicle by _id PUT Api Sample -  http://localhost:3000/vehicle/{_id}/add-maintenance-task

    HTTP REQUEST TYPE: PUT
    
## NOTE:: Since, it is only for demo purpose, I have not made maintenance crud since they are similar so taskId can be any string for now. So relationship can be also maintained if required.

    Testing Methodology: In body of postman in raw section put following json body by selecting JSON in select input present in last and replace {_id} with original identifier of vehicle
                        {
                            "taskId":"65d840d044f0f6ab42b71118"
                        }

    Response: vehicle object response will get if all validation passes.

h)  Vechicle to get single record GET Api Sample-  http://localhost:3000/vehicle/{_id}
    HTTP REQUEST TYPE: GET

    Testing Methodology: Just hit the url.
    Response: vehicle object response.





