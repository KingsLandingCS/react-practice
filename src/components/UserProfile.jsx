import { UserFavoriteFoods } from "./UserFavoriteFoods";

export function UserProfile() {
    return (
        <div>
            <p>Username: Bob</p>
            <div><span>
                Email: </span>
                <span>abc@xyz.com</span>
            </div>

            <UserFavoriteFoods />
        </div>
    );
}