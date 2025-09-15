import { Header } from '@/components/header';
import Image from 'next/image';

const OurStoryPage = () => {
  const leadershipTeam = [
    {
      name: 'Pastor Patrick Agyeman Dua',
      position: 'Head Pastor',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor David has been leading our congregation for over 15 years with a heart for community outreach and spiritual growth. He holds a Master of Divinity from Seminary College and is passionate about discipleship and youth ministry.',
    },
    {
      name: 'Pastor Peter Yawson',
      position: 'Senior Associate Pastor',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor Sarah brings a dynamic worship experience and oversees our music ministry. With a background in music therapy, she leads our congregation in heartfelt worship and coordinates our community service programs.',
    },
    {
      name: 'Pastor Calvin Afelete',
      position: 'Associate Pastor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: "Pastor Calvin serves on our board of elders and brings over 20 years of business experience to guide our church's financial stewardship. He is also active in our men's ministry and community outreach programs.",
    },
    {
      name: 'Pastor Solomon Umar Morrison',
      position: 'Associate Pastor',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor Solomon has a special calling to work with children and families. She coordinates our Sunday school programs, vacation Bible school, and family events, creating a nurturing environment for our youngest members.',
    },
    {
      name: 'Pastor Victoria',
      position: 'Associate Pastor',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor Vic leads our missions committee and overseas partnerships. His heart for global ministry has helped establish relationships with churches in three different countries, expanding our reach beyond our local community.',
    },
    {
      name: 'Pastor Richard Effah-Agyapong Jr.',
      position: 'Youth Pastor',
      image:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor Richard coordinates our food pantry, homeless shelter partnerships, and community service initiatives. Her compassionate leadership has helped our church become a pillar of support in the local community.',
    },
  ];

  return (
    <div>
      <Header
        maintext="Our story"
        image="/people-worshipping.jpg"
        subtext="We came, we saw, and we overcame by His blood"
      />
      <div className="p-24">
        <div className="grid grid-cols-2 gap-6 mb-20">
          <div className="relative h-150 rounded-2xl overflow-hidden">
            <Image
              src={'/daddy_1.jpg'}
              alt="people-worshipping"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-7xl font-extralight italic mb-4 tracking-tighter text-blue-500">
              Our <span className="font-bold">Beginnings</span>
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Founded in 1998 with just twelve families gathering in a small
              community center, our church has grown through faith,
              perseverance, and God&apos;s abundant grace. What started as
              intimate prayer meetings has blossomed into a thriving
              congregation of over 800 members who share a common vision of
              spreading Christ&apos;s love.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Our journey has been marked by countless testimonies of
              transformation, healing, and spiritual growth. Through seasons of
              challenge and blessing, we have remained steadfast in our
              commitment to biblical truth, authentic worship, and genuine
              community. Every step of our path has been guided by prayer and
              anchored in the unchanging love of Jesus Christ.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Today, we continue to build on the foundation laid by our founding
              members, carrying forward their vision of a church that serves
              both God and community with excellence. We believe our best days
              are ahead as we trust in His perfect plan for our church family
              and the generations to come.
            </p>
          </div>
        </div>

        {/* Church leadership section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-extralight italic mb-4 tracking-tighter text-blue-500">
              Our <span className="font-bold">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated servants who guide our church family with
              wisdom, compassion, and unwavering faith in Christ Jesus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Our leadership team is committed to shepherding our congregation
              with integrity, transparency, and biblical wisdom.
            </p>
            <div className="inline-block bg-blue-50 px-8 py-4 rounded-lg">
              <p className="text-blue-800 font-medium italic">
                And he gave the apostles, the prophets, the evangelists, the
                shepherds and teachers, to equip the saints for the work of
                ministry, for building up the body of Christ.
              </p>
              <p className="text-blue-600 text-sm mt-2">- Ephesians 4:11-12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
