#include <stdio.h>
int main() {
    int l, c;
    for (l=1; l<10; l++) {
        for(c=0; c<=7+l; c++)
            printf(c<9-l?" ":"*");
        printf("\n");
    }
}