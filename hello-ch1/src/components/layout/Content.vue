<template>
                <Content :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 400px;">
                            <router-view></router-view>
                        </div>
                    </Card>
                </Content>
</template>
