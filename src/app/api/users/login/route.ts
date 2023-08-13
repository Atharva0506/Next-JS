import {connect} from '@/dbConfig/dbconfig';
import User from '@/model/userModel';
import {NextRequest,NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken"
import { cookies } from 'next/dist/client/components/headers';

connect()

export async function POST(request: NextResponse){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //Check If User Exists
       const user = await User.findOne({email});

       if(!user){
        return NextResponse.json({error:"User Dose Not Exists"}, {status:400})
       }

       //Check if Password Correct

       const valPassword = await bcryptjs.compare(password, user.password);
       if(!valPassword){
        return NextResponse.json({error:"Invalid Password"}, {status:400})
       }

       

       //create Token Data

       const tokenData = {
        id: user._id,
        username: user.username,
        email:user.email
       }
     
       //Create Token

       const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
     
       const response = NextResponse.json({message:"Successfully Login",success:true})
       response.cookies.set("token",token,{httpOnly:true,
    })
    return response;




    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500});
    }
}