import { cookies, headers } from 'next/headers';

export async function getSession() {
  let cookie = cookies().get('accessToken');

  let token = null;

  if (!cookie) {
    let header = headers().get('Authorization');
    if (header) {
      token = header.split(' ')[1];
    }
  } else {
    token = cookie.value;
  }

  if (!token) {
    return null;
  }

  return token;

  // 2) Verification token

  // try{

  //    let decoded =  jwt.verify(token,config.jwt.secret) as JwtPayload
  //    return decoded

  // }
  // catch(err){
  //   throw new ApiError(401,'jwt expired, please login')

  // }
}
