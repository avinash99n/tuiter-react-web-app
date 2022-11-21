const NavigationSidebar = (current) => {
    return(`

   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       ${current==='home' ? 
       `<a class="list-group-item active" href="../../tuiter/HomeScreen/home.html">`:
        `<a class="list-group-item" href="../../tuiter/HomeScreen/home.html">`}
       <i class="fa fa-home"></i> Home</a>
       
       ${current ==='explore' ?
        `<a class="list-group-item active" href="../../tuiter/explore/index.html">` :
        `<a class="list-group-item " href="../../tuiter/explore/index.html">`}
       <i class="fa fa-hashtag"></i> Explore</a>
       
          <a class="list-group-item" href="/">
       <i class="fa fa-bell"></i> Notification</a>
       
           <a class="list-group-item" href="/">
       <i class="fa fa-envelope"></i> Messages</a>
       
           <a class="list-group-item" href="/">
       <i class="fa fa-bookmark"></i> Bookmarks</a>
           <a class="list-group-item" href="/">
       <i class="fa fa-list"></i> Lists</a>
       
        <a class="list-group-item" href="/">
       <i class="fa fa-user"></i> Profile</a>
       
        <a class="list-group-item" href="/">
       <i class="fa fa-circle"></i> More</a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;