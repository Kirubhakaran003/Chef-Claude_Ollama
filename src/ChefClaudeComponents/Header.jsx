import chef_claude_icon from "../assets/chef-claude-icon.png"

export default function Header(){
    return(
        <>
            <div className="chef_icon_container">
            <img className="chef_icon" src={chef_claude_icon} alt="chef_claude_icon" />
            <p>Chef Claude</p>
            </div>
        </>
    )
}