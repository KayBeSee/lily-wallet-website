"use strict";

const Fragment = React.Fragment;
// import Transition from './Transition.js';

const useRef = React.useRef;
const useEffect = React.useEffect;
const useContext = React.useContext;
const { CSSTransition } = ReactTransitionGroup;

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function MyTransition({
  show,
  enter = "",
  enterFrom = "",
  enterTo = "",
  leave = "",
  leaveFrom = "",
  leaveTo = "",
  appear,
  children,
}) {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterFromClasses = enterFrom.split(" ").filter((s) => s.length);
  const enterToClasses = enterTo.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(" ").filter((s) => s.length);
  const leaveToClasses = leaveTo.split(" ").filter((s) => s.length);

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  return (
    <CSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener("transitionend", done, false);
      }}
      onEnter={(node) => {
        addClasses(node, [...enterClasses, ...enterFromClasses]);
      }}
      onEntering={(node) => {
        removeClasses(node, enterFromClasses);
        addClasses(node, enterToClasses);
      }}
      onEntered={(node) => {
        removeClasses(node, [...enterToClasses, ...enterClasses]);
      }}
      onExit={(node) => {
        addClasses(node, [...leaveClasses, ...leaveFromClasses]);
      }}
      onExiting={(node) => {
        removeClasses(node, leaveFromClasses);
        addClasses(node, leaveToClasses);
      }}
      onExited={(node) => {
        removeClasses(node, [...leaveToClasses, ...leaveClasses]);
      }}
    >
      {children}
    </CSSTransition>
  );
}

const Transition = ({ show, appear, ...rest }) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <MyTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <MyTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <Fragment>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mb-8">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a
                  href="https://lily.kevinmulcrone.com/"
                  aria-label="Home"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    className="h-8 w-auto sm:h-10"
                    style={{ margin: "0 0 .5em" }}
                    src="logo.svg"
                    alt="Logo"
                  />
                  <span
                    className="font-medium"
                    style={{ paddingLeft: ".5em", fontSize: "1.25em" }}
                  >
                    Lily Wallet
                  </span>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ isOpen: !this.state.isOpen });
                    }}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              <a
                href="https://lily.kevinmulcrone.com#features"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Features
              </a>
              <a
                href="https://lily.kevinmulcrone.com#security"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Security
              </a>
              <a
                href="https://lily.kevinmulcrone.com/pricing.html"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Pricing
              </a>
              <a
                href="https://lily.kevinmulcrone.com/support.html"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Support
              </a>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  href="https://lily.kevinmulcrone.com#download"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-yellow-300 bg-white hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-gray-50 active:text-yellow-700 transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          show={this.state.isOpen}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            style={{ zIndex: 1 }}
          >
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <a href="https://lily.kevinmulcrone.com/">
                    <div>
                      <img className="h-8 w-auto" src="logo.svg" alt="" />
                    </div>
                  </a>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen });
                      }}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="https://lily.kevinmulcrone.com#features"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Features
                  </a>
                  <a
                    href="https://lily.kevinmulcrone.com#security"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Security
                  </a>
                  <a
                    href="https://lily.kevinmulcrone.com/pricing.html"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Pricing
                  </a>
                  <a
                    href="https://docs.lily.kevinmulcrone.com"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Support
                  </a>
                </div>
                <div>
                  <a
                    href="https://lily.kevinmulcrone.com#download"
                    className="rounded-md block w-full px-5 py-3 text-center font-medium text-white bg-green-700 hover:bg-gray-100 hover:text-yellow-700 focus:outline-none focus:bg-gray-100 focus:text-yellow-700 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

const domContainer = document.querySelector("#navnav");
ReactDOM.render(<Nav />, domContainer);
