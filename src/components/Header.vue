<template>
    <b-navbar toggleable="md" type="dark" variant="info" class="main-nav">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
            <img src="../assets/spinoza-menu.png" alt="" class="spinoza-img">
            spinozapp
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button-group>
                    <b-button>Resolution</b-button>
                    <b-dropdown right text="Reader">
                        <b-dropdown-item>Book 1</b-dropdown-item>
                        <b-dropdown-item>Book 2</b-dropdown-item>
                        <b-dropdown-item>Book 3</b-dropdown-item>
                        <b-dropdown-item>Book 4</b-dropdown-item>
                        <b-dropdown-item>Book 5</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>Appendix</b-dropdown-item>
                    </b-dropdown>
                    <b-button>Graph</b-button>
                    
                </b-button-group>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>

<style>
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
nav.navbar.main-nav.navbar-dark.bg-info.navbar-expand-md {
    padding: 0;
    margin: 0;
}
</style>
