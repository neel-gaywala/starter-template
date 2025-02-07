export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  loginWithEmailCode: "/login-with-email-code",
  forgotPassword: "/forgot-password",
  ssoCallback: "/sso-callback",
  profileCreation: "/profile-creation",
  dashboard: "/dashboard",
  profileDetails: "/profiles/[profileId]/details",
  managerDetails: "/profiles/[profileId]/admins",
  afterLifeService: "/after-life-service",
  educationalResources: "/educational-resources",
  findCare: "/find-care",
  billing: "/billing",
  myAccount: "/my-account",
  admin: {
    dashboard: "/admin/dashboard",
    customers: "/admin/customers",
  },
};

export const queryStrings = {
  profileDetailsActiveTab: "pd-tab",
  educationResourcesActiveTab: "edu-tab",
  careNearMeActiveTab: "care-tab",
  profileCreationId: "profile-id",
  profileCreationActiveTab: "profile-tab",
  welcomeUser: "wu",
};

export const protectedRoutes = [
  routes.profileCreation,
  routes.dashboard,
  routes.profileDetails,
  routes.afterLifeService,
  routes.educationalResources,
  routes.findCare,
  routes.billing,
  routes.managerDetails,
  routes.myAccount,
];

export const adminProtectedRoutes = [
  routes.admin.customers,
  routes.admin.dashboard,
  routes.myAccount,
];
