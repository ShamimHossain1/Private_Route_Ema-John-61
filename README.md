# EmaJhon-Simple-55
/**

 * 1.Create firebase project

 * 2.Create web app

 * 3. npm i firebase

 * 4 save firebase config and export app

 * 5. Build > Authentication > Get started > Enable sign In methods

 * 6. create sign up and login route

 * 

 *

 * ----------------------------------

 * 

 * 1. Create a context provider file

 * 2. create a context and set provider

 * 3.set the children props

 * 4. set context value

 * 5. set the provider

 * 6. need to use useEffect hook to set observer so that website can check if there any user is already logged in or not

 * syntax{

 *   useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);

        });

        // stop observing while unmounting

        return () => {

            return unsubscribe();

        }

    }, [])

 * }

 */
