import { UserIcon } from "lucide-react";
import Image from "next/image";
import { defineField, defineType } from "sanity";

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  icon: UserIcon,

  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      description: 'The unique username for this user',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'User email address',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'imageURL',
      title: 'Image URL',
      type: 'string',
      description: 'User Clerk profile picture',
    }),
    defineField({
      name: 'joinedAt',
      title: 'Joined At',
      type: 'datetime',
      description: 'When this user account was created',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'isReported',
      title: 'Is Reported',
      type: 'boolean',
      description: 'Whether this user has been reported',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'username',
      media: 'imageURL'
    },
    prepare({ title, media }) {
      return {
        title,
        media: media ? (
          <Image src={media} alt={`${title}'s avatar`} width={40} height={40} />
        ) : (
          <UserIcon />
        )
      }
    }
  }
})