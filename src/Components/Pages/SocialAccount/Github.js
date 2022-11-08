import { GithubAuthProvider } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Context/Context'

const Github = () => {
    const { githubSingIn } = useContext(AuthContext)
    const githubProvider = new GithubAuthProvider()


    const githumsubmit = () => {
        githubSingIn(githubProvider)
            .then((result) => {
                toast.success('Register Success')
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center' onClick={githumsubmit}><FaGithubAlt className='mr-2' /> Github</p>
        </div>
    )
}

export default Github
