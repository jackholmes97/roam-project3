# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



subjects = [
    "gaming",
    "history",
    "cooking",
    "news"
]

30.times do 
    User.create(
        username: Faker::Internet.unique.username,
        email: Faker::Internet.unique.email,
        password_digest: Faker::Internet.unique.password)
end


50.times do 
    Forum.create(
        topic: Faker::Hipster.unique.sentence
        subject: subjects[rand(subject.length)]
    )
end

100.times do
    Post.create(
        title: Faker::Hipster.unique.word,
        content: Faker::Hipster.unique.paragraph(sentence_count: 4),
        user_id: Faker::Number.between(from: 1, to: 30),
        forum_id: Faker::Number.between(from: 1, to: 50)
    )
end




