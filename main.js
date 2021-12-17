noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEX///8AAAD8/Pxra2v39/fY2Njq6urc3Nz5+fnPz898fHw8PDzu7u7GxsaRkZFoaGhjY2Ompqbi4uJXV1dAQECYmJhcXFzBwcGHh4fJycm6urqzs7Otra02NjaBgYFxcXEMDAxLS0sjIyMsLCwVFRUcHByenp5RUVEgICCuOEDLAAAEyklEQVR4nO3baZuqIBQHcCS30hbNpqa9plm+/ye8mi2WC6AHrfv8f6/ufSaKcwQERMYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/lucP/2f8eIP5kuGtyJvz7Sdce9sPPNNJhFTXGLS6/0acZGJY5tvnwRzdjAyvNFSsYRxmJltVFSLpBese0bOR1DVFJxJvoQxDti7don+V0E8seO8rIS/KC5hfPltVpwIZ85HSTyxX6vourrBqbTEKXDfryV8lmcgsXRzEfnjyhIf79YU7KJu/WD3XCQUlTCcLiKpzfeEARk7+9644/FzVTJ4ZP10GZOiuTicmHe/53G2lCqy6jAoNXLxxCPjfdLYlyyyepOBcSQZTzImnCPirOyWmDfoOjopa+l4DGOUJuFHocirjwnJ1HCoEM+lbftKRZYv3x2q7/E5URJPxWSqyGenAYovgPxYcDFmbKBaJhRWQxMnzO0F5AWq4RjGUDltxklqxtif5qeiTXA2M/Yz4cfk5gXNbVxxlfsno0cQedY0/umqJCQpl73JNzcVLKD4uUWOaFOQjlvV0zT1Rt2AYO1wnqZRD55TI/3W8vTXGAsa+Larapu2yCFxDpai9MtOkKl4ZvnluCxBLdIM8Gtf35elX21qRGFaWlv/eP7AgXYydctBdrGX1epYcLErrApnbpT+PaLMwNn08stT/jxP4G2PBVen4kZ53b5ZEGeA33JgjJ3nNsZ/O0lBfKWLRr3btHNOvrC4z2i/P28tIdkA4MvynVDt1rkwZ7e/9Ykz8LhHGmR6otXFUHA3eOwP7q25GhvyFDB/k/nlw9ZOFi5uGO7aD/vRMchkYXi4/4F6lph47vS97VZx0avLYOGbsXDwsHAXPtSroe1JUENHDSlgTtdRqZloSAFnUddhKdGzA62y89k9PU/m7H3XcSnQtQevvPHXIV3PJq2uA1OgKQWM/XUdmTQdE6RUN8vDOip3mZqReD7+EgYan0W9S0PQeoJrKv79F6BvNEjQbxtu6FeentaTS5wdieu7D+n3IgOdKYiFxJPFZLOHuCXoWC09mokrIS9K97to9yGqHgQROdDV9ng9j72i+85WTuuYdJOE+0ECujHh2MJRTs7sb5rajv3Ml5Ktx8J2jurQXLTfx0MERN2BfkO9GKeYKY2e2yxJEnRspBYzJY7iCiyep7Nyp3UFgjbPrDXtDoVNtvGuLfUTRoFGY5hX+BIHlzjtXil3FF43xYOIWVHJ7Yszs8lIc2g3AQmVM7kPtlXfWr+TzVp/xyMee1b1njf3Kxb3vP6gsG4z+ruwRvddCF/Uc+s0hUln77hw1ZHxL5B50XWtfJPcSRza1KT65bW8hS93/zZHSiv0L9oDaOrmG3ElUyrtVeVcw9Zuc2ZUIG7aa6mL5n0qbHTGH+xLblQE1ku8z8CHwkfSY0e9ohJtIWr/hljKDQcVG42HRc1T9O6o6kWn70GNxGplh4uCF7zjUWDn1Hxv/Xz4zV6PCwec3sA+P0t6sSwwZlnWwYuidHz4iqLN3CIYsu2+tfU8L03FPor/NaP4Wr2s+XA4nFP3VHMef+38Grz4nZqX8B61BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4Bf8Ag6k91TFdGL4AAAAASUVORK5CYII=')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('Posenet Is Initialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}