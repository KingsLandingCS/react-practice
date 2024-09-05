import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    return (
        <div>
            <UserUsername username="bob" trimmedUsername="bob" />
            <b>Age: <span>{props.age}</span></b>
            <UserFavoriteFoods />
            {String(props.isLoggedIn)}
        </div>
    );
}