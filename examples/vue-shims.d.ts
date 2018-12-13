declare module "*.vue" {
  import Vue from 'vue';
  export default Vue;
}

declare module 'lui' {
  const lui: any;
  export default lui;
}

declare let app: any