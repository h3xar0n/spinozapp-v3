<template>
    <b-navbar toggleable="md" type="dark" class="main-nav">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">
            <img src="../assets/spinoza-menu.png" alt="" class="spinoza-img">
            spinozapp
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                    <b-button to="/resolution">Resolution</b-button>
                    <b-button to="/reader">Reader</b-button>
                    <b-button to="/graph">Graph</b-button>
                    
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>

<style scoped>
.spinoza-img {
    height: 60px;
    width: auto;
}
a.navbar-brand {
    padding-bottom: 0;
}
.main-nav {
    position: fixed;
    top: 0;
    width: 100%
}
.btn-secondary {
    margin: 10px;
}
.btn-secondary:not([disabled]):not(.disabled).active {
    background-color: #41b883
}
nav.navbar.main-nav.navbar-dark.navbar-expand-md {
    padding: 0;
    margin: 0;
    background: #35495e
}
</style>
