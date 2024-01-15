

const Card = ({username="X",post="Not assigned"}) => {
  return (
    <div>

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMB-XOer64vOEJjkhwLIxc6OLNPhmh6IR7A&usqp=CAU" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur harum consequatur voluptates dignissimos quisquam, voluptate asperiores expedita ea rerum distinctio! Earum numquam officiis distinctio sed voluptatem exercitationem amet molestias accusamus.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div>
       {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
