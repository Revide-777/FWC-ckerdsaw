#include<stdio.h>

int main(int num, char *argv[]){
    if (num == 1) {
        printf("No arguments supplied\n");
    } else {
        for (int i = 1; i < num && i <= 3; i++) {
            printf("%s\n", argv[i]);
        }
    }
    return 0;
}