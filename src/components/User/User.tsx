import { IUser } from '../../constants/interfaces.constant';

const User: React.FC<IUser> = ({ name, email, phone }) => {
  return (
    <li className='m-4 sm:m-8 p-8 text-xl font-normal leading-normal text-black dark:text-white shadow-custom dark:shadow-dark-custom dark:bg-blue-900'>
      <h3 className='flex flex-col justify-center pb-4 text-black dark:text-white '>
        <span className='text-base text-gray-500'>Name: </span> {name}
      </h3>
      <div>
        <p>
          <span className='text-base text-gray-500'>Email: </span>
          <a
            href={`mailto:${email}`}
            className='text-blue-500 hover:text-blue-700'
          >
            {email}
          </a>
        </p>
        <p>
          <span className='text-base text-gray-500'>Phone: </span>
          <a
            href={`tel:${phone}`}
            className='text-blue-500 hover:text-blue-700'
          >
            {phone}
          </a>
        </p>
      </div>
    </li>
  );
};

export default User;
