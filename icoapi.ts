import { Application ,Router} from "https://deno.land/x/oak/mod.ts";


//:model of file
interface  Course{
    name:string,
    price:number,
    certification:boolean
}
//file:data

let courses:Array<Course>=[
    {
        name:"C++ Bootcamp",
        price :2.4,
        certification:true
    },{
        name:"MERN Bootcamp",
        price :2,
        certification:true
    },{
        name:"React Bootcamp",
        price :0,
        certification:true
    },
    {
        name:"oak deno Bootcamp",
        price :2.3,
        certification:true
    }
];



//file:controllers

export const getCourses=({response}:{response:any})=>{
    response.body = courses;
};

export const addCourses=async({request,response}:{request:any,response:any},)=>{
    const body = await request.body();
    const course:Course = body.value;

    courses.push(course);
    response.body ={coursesAdded :"SUCCES"};
    response.status =200;
};

//file:server files
const router =new Router();
const app = new Application();  //membuat aplikasi baru
const PORT=4300;                

router
    .get("/learn",getCourses)
    .post("/create",addCourses);

app.use(router.routes());
app.use(router.allowedMethods()); //mengijinkan methode

await app.listen({port:4300});