<script lang="ts">
  import { BookingStore } from '$lib/stores/Store'

  // Watch the bookings store and update the total() method whenever it changes.
  $: total = $BookingStore.reduce((acc, curr) => acc + curr.price, 0)

</script>

<nav>
  <a href="/destinations">&lt;&nbsp; Destinations</a>
  <p>Items in Cart: {$BookingStore.length}</p>
  <p>Amount: {total}</p>
</nav>

<slot />

<style>
  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    color: grey;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #f1f1f1;
  }
</style>