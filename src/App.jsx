import { UserProfile } from './components/UserProfile'

export default function App() {
    return (<div>
        <h1>Root Component</h1>
        <UserProfile age={23} isLoggedIn={true} />
    </div>);
}