<template>
    <div id="page" class="container-fluid m-0">
        <div class="section m-0 p-5 mx-auto">
            <div class="row align-items-center">
                <div class="col">
                    <h1>Hello! I'm Julia</h1>
                    <h2>Software Engineering Student</h2>
                    <p>
                        Hi, I'm Julia, and I'm currently completing my second year at McGill University.
                        I enjoy programming, and I jump on the occasion to work on new projects and learn more about technologies! I know C++, Java, Python, Assembly, C.
                        I am also a member of GameDev, the game development student society of McGill University.
                    </p>
                    <p>
                        In my free time, I like playing badminton and trying out new board games.
                    </p>
                </div>

                <div class="col-4 m-auto">
                        <img class=""
                            src="/src/assets/pfp.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
}
</script>

<style scoped>
#page {
    background-color: #2589BD;
    color: #FFFFFA;
}

.row {
    margin-left: 0;
    margin-right: 0;
}

.section {
    min-height: 100vh;
}

img {
    max-width: inherit;
    height: inherit;
}

.col {
    min-width: 400px;
}
</style>