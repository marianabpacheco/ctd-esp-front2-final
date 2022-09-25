export function formatTime(time:Date){
    const hour = new Date();
    const minutes = Math.floor(
          (hour.getTime() - time.getTime()) / 60000
        );

    return minutes;
}