export default function () {
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = async (...args) => {
            await method.apply(target, args);
        };
    };
}
