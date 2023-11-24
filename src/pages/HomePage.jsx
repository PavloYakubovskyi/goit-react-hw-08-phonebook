import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <Box maxW="300px" m="0 auto">
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        "CONTACTS BOOK"
      </Text>
      <Text textAlign="center" fontSize="xl" my="20px">
        The "Contacts Book" is a user-friendly and convenient application
        designed to assist you in storing and managing your contacts. It enables
        you to efficiently organize your contact information, ensuring that you
        can easily and quickly locate the details you need.
      </Text>
      {!isLoggedIn && (
        <Link to="/login">
          <Text
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Join Us!!!
          </Text>
        </Link>
      )}
    </Box>
  );
}
