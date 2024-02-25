from PIL import Image

image = Image.open('sunflower.jpg')

new_image = image.resize((256, 256))
new_image.save('sunflower.jpg')


