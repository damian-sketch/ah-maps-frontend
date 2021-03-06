import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import Profile from '../views/Profile';
import PageNotFound from '../components/PageNotFound';
import Article from '../views/Article';
import ArticlesList from '../views/ArticleList';
import ArticleView from '../views/Article/Articleview';
/**
 * Routing details
 * path: string: url path
 * name: string: name of the path
 * protected: bool: checks if the url is protected
 */


const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/article',
    name: 'Create Article',
    protected: true,
    component: Article,
  },
  {
    path: '/articles',
    name: 'List Articles',
    component: ArticlesList,
  },
  {
    path: '/search/:q',
    name: 'Search Articles',
    component: ArticlesList,
  },
  {
    path: '/search/',
    name: 'Search Articles',
    component: ArticlesList,
  },
  {
    path: '/author/:author',
    name: 'Search Author Articles',
    component: ArticlesList,
  },
  {
    path: '/tags/:tag',
    name: 'Search Tag Articles',
    component: ArticlesList,
  },
  {
    path: '/article/:slug',
    name: 'View Article',
    component: ArticleView,
  },
  {
    path: '/articles/:title',
    name: 'View Article',
    component: ArticleView,
  },
  {
    path: '/article/update/:slug',
    name: 'Update Article',
    protected: true,
    component: Article,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: true,
    component: Profile,
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound,
  },


];

export default routes;
