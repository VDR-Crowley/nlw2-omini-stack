export default function covertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const lineInMinutes = (hour * 60) + minutes;
    return lineInMinutes;
}