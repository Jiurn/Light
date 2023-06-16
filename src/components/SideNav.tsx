import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function SideNav(){
    const session = useSession()
    const user = session.data?.user
    return <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
            <li>
                <Link href="/">Home</Link>
            </li>
            {user != null && (
            <li>
              <Link href={`/profiles/${user.id}`}>Profile</Link>
            </li>
            )}   
            {user == null ? ( // si user est null, ça affiche Log In, si il est connecter, affiche Log out, ligne 19 et 21: void veut dire qu'on s'en fout du retour de signOut(pour typescript)
            <li>
              <button onClick={() => void signIn()}>Log In</button> 
            </li> 
            ) : <li>
            <button onClick={() => void signOut()}>Log Out</button>
          </li> 
          }         
        </ul>
    </nav>
}