import React, { useState } from 'react';
import { Button, Form, Input, Checkbox, Select, Card, Row, Col, Steps } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import './ProfileCompletion.css';  // Ensure you have this CSS file
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const { Step } = Steps;

const ProfileCompletion = () => {
    const navigate = useNavigate();  // Hook for navigation

    const [currentStep, setCurrentStep] = useState(0);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // Advance to the next step unless it's the last step
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        // Go back to previous step
        setCurrentStep(currentStep - 1);
    };

    // Depending on the step, render different form content
    const renderCurrentStep = () => {
        switch (currentStep) {
            case 0:
                return renderStepOne();
            case 1:
                return renderStepTwo();
            case 2:
                return <p>Payment processing form...</p>;  // Placeholder for payment form
            case 3:
                return <p>Registration complete!</p>;  // Completion message
            default:
                break;
        }
    };

    const renderStepOne = () => (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Nom" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Ville de naissance" name="birthCity">
                <Input />
            </Form.Item>
            <Form.Item label="Pays de naissance" name="birthCountry">
                <Select placeholder="Sélectionner">
                    {/* Options should be dynamically loaded */}
                </Select>
            </Form.Item>
            <Form.Item label="Résidence fiscale" name="taxResidency">
                <Select placeholder="Sélectionner">
                    {/* Options should be dynamically loaded */}
                </Select>
            </Form.Item>
            <Form.Item label="Nationalité" name="nationality">
                <Select placeholder="Sélectionner">
                    {/* Options should be dynamically loaded */}
                </Select>
            </Form.Item>
            <Form.Item label="Téléphone" name="phone">
                <Input />
            </Form.Item>
            <Form.Item label="N° et voie" name="address">
                <Input />
            </Form.Item>
            <Form.Item label="Code postal" name="postalCode">
                <Input />
            </Form.Item>
            <Form.Item label="Ville" name="city">
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">Continuer</Button>
        </Form>
    );

    const renderStepTwo = () => (
        <>
         <Row gutter={24}>
                <Col span={12}>
                    <Card title="Compléter mon profil" bordered={false}>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Sélectionnez votre justificatif d'identité" name="identityProof">
                                <Select placeholder="Sélectionner">
                                    <Option value="passport">Passeport</Option>
                                    <Option value="idCard">Carte d'Identité</Option>
                                </Select>
                            </Form.Item>
                            <Checkbox>Je certifie l'exactitude des informations et pièces fournies lors de mon inscription.</Checkbox>
                            <Checkbox>Je reconnais m'être inscrit en l'absence de tout démarchage bancaire ou financier.</Checkbox>
                            <Checkbox>En cochant cette case, je déclare avoir pris connaissance des conditions générales d'utilisation.</Checkbox><br/><br/>
                            <Button type="primary" htmlType="submit">Valider</Button>
                        </Form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Pourquoi vérifier mon profil ?" bordered={false}>
                        <p>Dans le cadre de la lutte contre le blanchiment d'argent, la réglementation nécessite une vérification de votre identité avant de pouvoir investir.</p>
                        <Card type="inner" title="Quelle protection de mes données ?">
                            <p>Vos données ne seront pas revendues à des tiers. Nous assurons la sécurité et la confidentialité de vos données sur notre plateforme.</p>
                        </Card>
                        <br/>
                        <Card type="inner" title="En validant mon profil, je pourrai:">
                            <p>Accéder à 100% de la plateforme, Investir dans les projets en cours, Suivre les performances de mes investissements, Percevoir les revenus liés à mes investissements.</p>
                        </Card>
                    </Card>
                    <div className="benefits-list">
                        <h3>En validant mon profil, je pourrai:</h3>
                        <ul>
                            <li><CheckCircleOutlined /> Accéder à 100% de la plateforme</li>
                            <li><CheckCircleOutlined /> Investir dans les projets en cours</li>
                            <li><CheckCircleOutlined /> Suivre les performances de mes investissements</li>
                            <li><CheckCircleOutlined /> Percevoir les revenus liés à mes investissements</li>
                        </ul>
                    </div>
                </Col>    
            </Row>
            <Row>
                <Col span={1}>
                    <Button onClick={handlePrev}>Back</Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" htmlType="submit">Continue</Button>
                </Col>
            </Row>
        </>
    );

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    return (
        <div className="profile-completion-container">
            <Button icon={<ArrowLeftOutlined />} className="back-button" onClick={goBack}>Retour</Button>
            <Steps current={currentStep}>
                <Step title="Login" icon={<UserOutlined />} />
                <Step title="Verification" icon={<SolutionOutlined />} />
                <Step title="Pay" icon={<LoadingOutlined />} />
                <Step title="Done" icon={<SmileOutlined />} />
            </Steps>
            <Row gutter={24}>
                <Col span={24}>
                    <Card bordered={false}>
                        {renderCurrentStep()}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileCompletion;
