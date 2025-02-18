import React from 'react';
import { Card, Typography, Row, Col, Image, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import useAuth from '../../components/hooks/useAuth';
import useAxiosSecure from '../../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/shared/loader/Spinner';

const { Title, Text } = Typography;


// 
const Profile = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //
  const { data: userData = {}, isLoading } = useQuery({
    queryKey: ["all-users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);
      return data;
    },
  });

if(isLoading) return <Spinner/>
// 
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md font-roboto overflow-hidden">
      {/* Profile Section */}
      <Row gutter={[16, 16]}>
         {/*  */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Card
            title="My Profile"
            bordered={false}
          >
             <img className='mx-auto rounded-full h-[170px] max-w-[175px]' src={userData.userImage}  alt="Profile Picture"/>
      
            <Title level={5} style={{ textAlign: 'center', marginTop: 16 ,fontFamily:"font-exo2", fontSize:"1.4rem"}}>
              {userData.userName}
            </Title>
            <Text className="flex justify-start items-center gap-1">
              Email: {userData.userEmail}
            </Text>
            <Text type={userData.isVerified ? 'success' : 'danger'}>
              Verification Status: {userData.isVerified ? 'Verified' : 'Not Verified'}
            </Text>
            <Button
              type="primary"
              icon={<EditOutlined />}
              style={{ marginTop: 16, width: '100%' }}
            >
              Edit Profile
            </Button>
          </Card>
        </Col>
          {/* / */}
        <Col xs={24} sm={24} md={16} lg={16}>
          {/* Role Details Section */}
          <Card
            title="Role Details"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>User Role:</Text>
                <Text>{userData.userRole}</Text>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>Designation:</Text>
                <Text>{userData.designation}</Text>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>Terms Accepted:</Text>
                <Text>{userData.term ? 'Yes' : 'No'}</Text>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>Verification Status:</Text>
                <Text type={userData.isVerified ? 'success' : 'danger'}>
                  {userData.isVerified ? 'Verified' : 'Not Verified'}
                </Text>
              </Col>
            </Row>
          </Card>

          {/* Salary Information Section */}
          <Card title="Salary Information" bordered={false}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>Salary:</Text>
                <Text>${userData.salary}</Text>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Text strong>Bank Account No:</Text>
                <Text>{userData.bank_account_no}</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;