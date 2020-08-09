'use strict';

const e = React.createElement;
const Fragment = React.Fragment

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    return (
      <Fragment>
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home" style="display: flex; align-items: center;">
                  <img class="h-8 w-auto sm:h-10" style="margin: 0 0 .5em;" src="logo.svg" alt="Logo" />
                  <span class="font-medium" style="padding-left: .5em; font-size: 1.25em;">Lily
                    Wallet</span>
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu" aria-label="Main menu" aria-haspopup="true">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
              <a href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</a>
              <a href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Security</a>
              <a href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Docs</a>
              <a href="#"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Support</a>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span class="inline-flex rounded-md shadow">
                <a href="#"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-yellow-300 bg-white hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-gray-50 active:text-yellow-700 transition duration-150 ease-in-out">
                  Download
                </a>
              </span>
            </div>
          </nav>
        </div>


        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical"
              aria-labelledby="main-menu">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <button type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem">Product</a>
                <a href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem">Features</a>
                <a href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem">Marketplace</a>
                <a href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem">Company</a>
              </div>
              <div>
                <a href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100 hover:text-yellow-700 focus:outline-none focus:bg-gray-100 focus:text-yellow-700 transition duration-150 ease-in-out"
                  role="menuitem">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const domContainer = document.querySelector('#navnav');
console.log('domContainer: ', domContainer);
ReactDOM.render(e(LikeButton), domContainer);