let hasJoined = false;

export const ZoomClientManager = {
    get hasJoined() {
        return hasJoined;
    },
    set hasJoined(value: boolean) {
        hasJoined = value;
    },
};
