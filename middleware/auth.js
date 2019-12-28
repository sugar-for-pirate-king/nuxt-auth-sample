export default function({ store, redirect }) {
  if (store.state.authenticated == false) {
    return redirect("/login");
  }
}
