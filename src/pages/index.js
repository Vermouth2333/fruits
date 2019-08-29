import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

const Type = Loadable({
    loader:()=>import("./type"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Carts = Loadable({
    loader:()=>import("./carts"),
    loading:Loading
})
const List = Loadable({
    loader:()=>import("./list"),
    loading:Loading
})
const Des = Loadable({
    loader:()=>import("./search/des"),
    loading:Loading
})
const Detail = Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})
const XrrCity = Loadable({
    loader:()=>import("./xrrcity"),
    loading:Loading
})

const City = Loadable({
    loader:()=>import("./city"),
    loading:Loading
})
const Details_s = Loadable({
    loader:()=>import("./details_s"),
    loading:Loading
})
export {
    Home,
    Search,
    Type,
    Login,
    Mine,
    Carts,
    List,
    Des,
    Detail,
    XrrCity,
    City,
    Details_s,
}