const WhoToFollowListItem=(who) =>{
    return(`
         <li class="list-group-item wd-bg-list">
            <img src=${who.avatarIcon}
                 class="rounded-circle wd-profile-img">
            <div class="wd-profile-name">
                <p class="wd-profile-account-name">${who.userName}  <i class="fa fa-check-circle "></i></p>
                <p class=" wd-handler">@${who.handle}</p>
            </div>
            <button type="button" class="btn btn-primary fw-bold rounded-pill wd-follow-btn d-inline">Follow</button>
        </li>
    
    `)
}

export default WhoToFollowListItem;