import Dashboard from "./views/Dashboard.js"
import Posts from './views/Posts.js'
import Settings from './views/Settings.js'



//Client Side routing 
const router = async () =>
{
    const routes =
    [
        { path: '/', view: Dashboard /*() => console.log('viewing dashboard')*/},
        { path: '/posts', view: Posts /*() => console.log('viewing posts')*/},
        //{ path: '/posts/:id', view: Post},
        { path: '/settings', view: Settings /*() => console.log('viewing settings')*/}
    ];

    // Test each route for potential match
    let pMatchs = routes.map(at =>
        {
           return {route:at,isMatch: location.pathname === at.path} 

            

        }).find(at => 
        {
            return at.isMatch

        });

        //default route when there is no match to show the any of pages
        if(!pMatchs){pMatchs = {route:routes[0],isMatch: true}}

        /* let match = pMatchs.find(at => {return at.isMatch}) */


        //console.log(pMatchs.route.view());
        

        document.querySelector('main').innerHTML = await new pMatchs.route.view().getHtml();

};


// window.addEventListener('popstate', router);
window.onpopstate = router


document.addEventListener('DOMContentLoaded', () =>
{
    //To prevent the page refreshing
    document.body.addEventListener('click', e =>
        {
            if(e.target.matches(".Nav-link"))
            {
                e.preventDefault()
                
                history.pushState(null,null,e.target.href)
                router()
            }


        }
    )
    
    
    router()
});